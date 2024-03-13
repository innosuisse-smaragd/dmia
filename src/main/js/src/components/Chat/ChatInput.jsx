import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

// TODO: Display pop-up when user tries to send an empty message

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function ChatInput({
  type = "text",
  onClick,
  options,
  isDisabled,
  setInputDisabled,
  onReview,
}) {
  const [multi, setMulti] = useState([]);
  const [select, setSelect] = useState("");
  const [value, setValue] = useState("");
  const [selectDate, setSelectDate] = useState("");

  const handleMultiChange = (event) => {
    const {
      target: { value },
    } = event;
    setMulti(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    if (
      (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) &&
      (value !== "" || multi.length !== 0)
    ) {
      if (type === "multi") {
        onClick(multi);
      } else {
        onClick(value);
      }
      setValue("");
      setSelect("");
      setMulti([]);
      setInputDisabled(true);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDateChange = (date) => {
    let month = `${date.$M + 1}`;
    if (month.length === 1) {
      month = "0" + month;
    }
    let day = `${date.$D}`;
    if (day.length === 1) {
      day = "0" + day;
    }
    const formattedDate = `${day}.${month}.${date.$y}`;
    setValue(formattedDate);
    setSelectDate(date);
  };

  const handleReview = (e) => {
    if (e.type === "click") {
      onReview(true);
    }
  };

  return (
    <Stack direction="row" sx={{ p: 1, borderTop: "solid 1px #ddd" }}>
      {type === "text" && (
        <TextField
          sx={{ width: "100%", mr: 1 }}
          value={value}
          onChange={handleChange}
          onKeyDown={handleClick}
          disabled={isDisabled}
        />
      )}
      {type === "number" && (
        <TextField
          sx={{ width: "100%", mr: 1 }}
          value={value}
          type="number"
          onChange={handleChange}
          onKeyDown={handleClick}
          disabled={isDisabled}
        />
      )}
      {(type === "disabled" || type === "loggedIn") && (
        <TextField sx={{ width: "100%", mr: 1 }} disabled />
      )}
      {type === "final" && (
        <TextField
          sx={{ width: "100%", mr: 1 }}
          value={value}
          onChange={handleChange}
          onKeyDown={handleClick}
          disabled={isDisabled}
        />
      )}
      {type === "date" && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={selectDate}
            onChange={handleDateChange}
            format="DD.MM.YYYY"
            sx={{ width: "100%", mr: 1 }}
            disabled={isDisabled}
            label={'"TT.MM.JJJJ"'}
            openTo="year"
          />
        </LocalizationProvider>
      )}
      {type === "multi" && (
        <FormControl fullWidth sx={{ mr: 1 }}>
          <InputLabel id="multi-label">Optionen</InputLabel>
          <Select
            labelId="multi-label"
            id="multi-select"
            multiple
            value={multi}
            onChange={handleMultiChange}
            input={<OutlinedInput label="Multi" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            disabled={isDisabled}
          >
            {options.map((option, key) => (
              <MenuItem value={option.valueCoding.display} key={key}>
                <Checkbox
                  checked={multi.indexOf(option.valueCoding.display) > -1}
                />
                <ListItemText primary={option.valueCoding.display} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {type === "select" && (
        <FormControl fullWidth sx={{ mr: 1 }}>
          <InputLabel id="select-label">Wählen</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={select}
            label="Select"
            onChange={handleSelectChange}
            disabled={isDisabled}
          >
            {options.map((option, key) => {
              return (
                <MenuItem value={option.valueCoding.display} key={key}>
                  {option.valueCoding.display}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {type === "disabled" ||
      type === "loggedIn" ||
      (value === "" && multi.length === 0) ? (
        <Button variant="outlined" onClick={handleClick} disabled>
          <SendIcon />
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClick} disabled={isDisabled}>
          <SendIcon />
        </Button>
      )}
      {type === "final" ? (
        <Button
          variant="outlined"
          sx={{ ml: ".5rem", px: "1.5rem" }}
          onClick={handleReview}
          disabled={isDisabled}
        >
          Überprüfen
        </Button>
      ) : (
        ""
      )}
      {type === "loggedIn" ? (
        <Button
          variant="outlined"
          sx={{ ml: ".5rem", px: "1.5rem" }}
          onClick={handleReview}
          disabled={isDisabled}
        >
          Aufgaben ansehen
        </Button>
      ) : (
        ""
      )}
    </Stack>
  );
}

ChatInput.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.array,
  isDisabled: PropTypes.bool,
  setInputDisabled: PropTypes.func,
  onReview: PropTypes.func,
};

export default ChatInput;
