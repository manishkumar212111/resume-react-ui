import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ContentEditable = (props) => {
  const defaultValue = useRef(props.value);
  const handleInput = (data) => {
    if (props.onChange) {
      props.onChange(data);
    }
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={props.value.replaceAll('&lt;' , '<')}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        handleInput(data);
        console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
    // <div
    //   contentEditable
    //   onInput={handleInput}
    //   className={`${props.className}`}
    //   dangerouslySetInnerHTML={{ __html: defaultValue.current.replaceAll('&lt;' , '<') }}
    // />
  );
};

const mapStateToProps = (state) => ({
  font_detail: state.tool.font_detail,
});

const mapDispatchToProps = {
  // updateFontState
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditable);
