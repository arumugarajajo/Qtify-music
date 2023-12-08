import React from "react";
import "./FAQs.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function FAQs() {
  return (
    <div className="faqs">
      <h2>FAQs</h2>
      <div className="accordion">
      <Accordion className="accord"> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className="expandmoreicon"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typo">Is QTify is free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Yes! It is 100% free, and has no ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expandmoreicon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo">Can I download and listen offline songs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
           Yes! You can download and listen offline songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}

export default FAQs;
