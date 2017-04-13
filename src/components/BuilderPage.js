import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import axios from 'axios';

import BuilderSubPalette from './BuilderSubPalette';
import BuilderPalette from './BuilderPalette';
import BuilderTarget from './BuilderTarget';
import groups from '../data/groupings';

function exportFile(allElements) {
  let cqlText = '';

  // TODO: This will come from the inputs in the "Save" modal eventually.
  const libraryName = 'AgeRangeAuthoringDemo';
  const versionNumber = 1;
  const dataModel = "FHIR version '1.0.2'";
  const context = 'Patient';

  let initialCQL = `library ${libraryName} version '${versionNumber}' \n\n`;
  initialCQL += `using ${dataModel} \n\n`;
  initialCQL += `context ${context} \n\n`;
  cqlText += initialCQL;

  // TODO: Some of this will be removed and put into separate templates eventually.
  for (let i = 0; i < allElements.length; i++) {
    cqlText += `define AgeRange: AgeInYears()>=${allElements[i].low} and AgeInYears()<=${allElements[i].high} \n`;
  }

  const saveElement = document.createElement('a');
  saveElement.href = `data:text/plain,${encodeURIComponent(cqlText)}`;
  saveElement.download = `${libraryName}.cql`;
  saveElement.click();
}

function getAllElements() {
  let allElements = [];
  axios.get('http://localhost:3001/api/ageRange')
    .then((result) => {
      allElements = result.data;
      exportFile(allElements);
    });
}

class BuilderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroup: null,
      droppedElements: [],
    };

    this.setDroppedElements = this.setDroppedElements.bind(this);
  }

  componentDidMount() {
    if (this.props.match) {
      this.setSelectedGroup(this.props.match.params.group);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match) { return; }
    if (this.props.match.params.group !== nextProps.match.params.group) {
      this.setSelectedGroup(nextProps.match.params.group);
    }
  }

  setSelectedGroup(groupId) {
    const group = groups.find(g => parseInt(g.id, 10) === parseInt(groupId, 10));
    if (group) {
      this.setState({ selectedGroup: group });
    } else {
      this.setState({ selectedGroup: null });
    }
  }

  setDroppedElements(elements) {
    this.setState({ droppedElements: elements });
  }

  renderSidebar() {
    if (this.state.selectedGroup) {
      return <BuilderSubPalette
        selectedGroup={this.state.selectedGroup}
        updateDroppedElements={this.setDroppedElements}
        droppedElements={this.state.droppedElements} />;
    }
    return null;
  }

  render() {
    return (
      <div className="builder">
        <header className="builder__header">
          <h2 className="builder__heading">Model title that's kind of long</h2>

          <div className="builder__buttonbar">
            <button onClick={getAllElements} className="builder__savebutton is-unsaved">Save</button>
            <button className="builder__deletebutton">Delete</button>
          </div>
        </header>
        <div className="builder__sidebar">
          <BuilderPalette selectedGroup={this.state.selectedGroup} />
          {this.renderSidebar()}
        </div>
        <BuilderTarget
          updateDroppedElements={this.setDroppedElements}
          droppedElements={this.state.droppedElements} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BuilderPage);