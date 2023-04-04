import React, { Component } from 'react';
import { getTouchPositions } from '../utilities/utilities';
export const cubeWidth = 50;
export const faceArray = ['front', 'back', 'top', 'bottom', 'left', 'right'];
export const facePosition = {
    left: [-cubeWidth, 0, 0],
    right: [cubeWidth, 0, 0],
    front: [0, 0, cubeWidth],
    back: [0, 0, -cubeWidth],
    top: [0, -cubeWidth, 0],
    bottom: [0, cubeWidth, 0]
};

class Cube extends Component {

    static propTypes = {
        faceRotationInit: React.PropTypes.func,
        translate: React.PropTypes.array,
        orientation: React.PropTypes.array
    };

    
}