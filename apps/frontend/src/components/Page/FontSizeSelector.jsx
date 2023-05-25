import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFontSize,
  selectFontSizes,
  selectGrow,
} from "../../slices/themeSlice";
import { Button, Menu, MenuItem, styled } from "@mui/material";

// Component used to select the app's global font size
function FontSizeSelector() {
  const fontSizes = useSelector(selectFontSizes);
  const grow = useSelector(selectGrow);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  // Custom styled menu item
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    // Grows with the font size
    padding: `${6 * grow}px ${16 * grow}px`,

    // Has custom selected colors
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }));

  // When select font size item is clicked
  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    dispatch(changeFontSize(index));
  };

  return (
    <>
      <Button
        aria-label="font size"
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        color="inherit"
        sx={{ mr: 1 }}
      >
        Font Size
      </Button>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {fontSizes.map((fontSize) => (
          <StyledMenuItem
            key={fontSize.size}
            selected={fontSize.selected}
            onClick={(event) => handleMenuItemClick(event, fontSize.size)}
          >
            {fontSize.text}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
}

export default FontSizeSelector;
