import React, { useState, useRef, useEffect } from "react";
import {connect} from "react-redux";

const ContentEditable = (props) => {
    const defaultValue = useRef(props.value);
    const [prev_font_detail , setPrevFontDetail] = useState({});
    const [curr_font_detail , setCurrFontDetail] = useState({});
    
    useEffect(() => {
      setPrevFontDetail({...prev_font_detail, bold : curr_font_detail.bold});

      setCurrFontDetail(props.font_detail);
    }, [props.font_detail.bold]);

    useEffect(() => {
      setPrevFontDetail({...prev_font_detail, italic : curr_font_detail.italic});
      setCurrFontDetail(props.font_detail);
    }, [props.font_detail.italic]);

    useEffect(() => {
      setPrevFontDetail({...prev_font_detail, underline : curr_font_detail.underline});
      setCurrFontDetail(props.font_detail);
    }, [props.font_detail.underline]);

    // useEffect(() => {
    //   document.execCommand('italic');
    // }, [props.font_detail.italic]);

    // useEffect(() => {
    //   document.execCommand('underline');
    // }, [props.font_detail.underline]);

    const handleInput = (event) => {
      // if(curr_font_detail.bold != prev_font_detail.bold){
      //   event.preventDefault();
      //   console.log("bold executed");
      //   document.execCommand('bold');
      // }
      // if(curr_font_detail.italic != prev_font_detail.italic){
      //   event.preventDefault();
      //   console.log("italic executed");
        
      //   document.execCommand('italic');
      // }
      // if(curr_font_detail.underline != prev_font_detail.underline){
      //   event.preventDefault();
      //   console.log("underline executed");

      //   document.execCommand('underline');
      // }

      if (props.onChange) {
        props.onChange(event.target.innerHTML);
      }
      setPrevFontDetail(curr_font_detail)

    };
  
    return (
      <span
        contentEditable
        onInput={handleInput}
        className={`custom-textarea ${props.className}`}
        dangerouslySetInnerHTML={{ __html: defaultValue.current.replaceAll('&lt;' , '<') }}
      />
    );
  };


const mapStateToProps = ( state ) => ( {
  font_detail: state.tool.font_detail
} );

const mapDispatchToProps = {
  // updateFontState
};

export default connect( mapStateToProps, mapDispatchToProps )( ContentEditable );
 