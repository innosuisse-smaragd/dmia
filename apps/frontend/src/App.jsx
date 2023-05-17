import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";

function App() {
  const [tests, setTests] = useState([]);

  const fetchTests = async () => {
    const apiKey = import.meta.env.VITE_STRAPI_API_KEY;
    const { data } = await axios.get("http://localhost:1337/api/tests", {
      headers: {
        Authorization: `bearer ${apiKey}`,
      },
    });

    return data.data;
  };

  useEffect(() => {
    fetchTests().then((results) => {
      setTests(results);
    });
  }, []);

  const renderedTests = tests.map(({ id, attributes }) => {
    return (
      <Card key={id}>
        <CardHeader title={attributes.Name} />
        <CardContent>
          <Typography variant="body1">{attributes.Description}</Typography>
        </CardContent>
      </Card>
    );
  });

  return <div>{renderedTests}</div>;
}

export default App;
