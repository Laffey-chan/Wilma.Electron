import React from 'react';

class MenuBar extends React.Component{
    render(){
        return(
        <div id="titlebar">
        <div id="drag-region">

          <div id="window-title">
            <span>Wilma v 2.0</span>
          </div>

          <div id="window-controls">
            <div class="button" id="min-button">
              <span>&#xE921;</span>
            </div>
            <div class="button" id="max-button">
              <span>&#xE922;</span>
            </div>
            <div class="button" id="restore-button">
              <span>&#xE923;</span>
            </div>
            <div class="button" id="close-button">
              <span>&#xE8BB;</span>
            </div>

          </div>
        </div>
      </div>
        );
    }
}
export default MenuBar;

