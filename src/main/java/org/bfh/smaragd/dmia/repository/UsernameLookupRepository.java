package org.bfh.smaragd.dmia.repository;

import java.util.*;

public abstract class UsernameLookupRepository<S> {

    //Key: username
    //Value: set of ids
    private final Map<String, Set<String>> usernameLookup = new HashMap<>();

    private final Map<String, S> entities = new HashMap<>();

    public void save(String username, S entity) {
        var id = extractId(entity);
        entities.put(id, entity);
        updateUsernameLookup(username, id);
    }

    public abstract String extractId(S entity);

    private void updateUsernameLookup(String username, String id) {
        var ids = usernameLookup.getOrDefault(username, new HashSet<>());
        ids.add(id);
        usernameLookup.put(username, ids);
    }

    public Optional<S> findByUsernameAndId(String username, String id) {
        S entity = null;
        if (username != null && id != null) {
            boolean idBelongToUsername = usernameLookup.getOrDefault(username, Collections.emptySet()).contains(id);
            if (idBelongToUsername) {
                entity = entities.get(id);
            }
        }
        return Optional.ofNullable(entity);
    }

    public List<S> findByUsername(String username) {
        List<S> results = Collections.emptyList();
        if (username != null) {
            results = usernameLookup
                    .getOrDefault(username, Collections.emptySet())
                    .stream()
                    .map(entities::get)
                    .toList();
        }
        return results;
    }

    public void remove(String username, String id) {
        findByUsernameAndId(username, id).ifPresent(entity -> {
            usernameLookup.getOrDefault(username, Collections.emptySet()).remove(id);
            entities.remove(id);
        });
    }
}
