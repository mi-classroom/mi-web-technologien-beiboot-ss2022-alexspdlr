# 3DLibrary: Three.js

## Status

Accepted

## Context

The images must be displayed on a 3-dimensional timeline. A representation of the time stream without further auxiliary tools would be enormously complex and error-prone. In addition, it must be possible to move the camera within the 3D space, since the timeline is too long and the number of images too high to display them in a meaningful size within a single "view".

## Decision

- Three.js is used as the underlying 3D rendering library 
- Three-React-Fiber is used as a wrapper that allows three.js components to be used in the React component style without limiting the functionality of three.js in any way
- Three-Drei acts as a thin layer on top of three react fiber, allowing the implementation of basic functions in 3d space without having to write a lot of code 
- Three-Cannon is used to incorporate physics, and makes it possible to easily and with little error implement the function of moving across a surface using the WASD keys as in games

## Consequences

- Since Three.js uses the GPU of the end device, it must provide the necessary OpenGL 2.0 drivers
- The complex movement of the camera through a 3d dimensional space with many 3 dimensional objects is relatively GPU intensive and could therefore lead to performance issues on very low end devices
- Even though three-drei simplifies many functionalities, in components developed with three you are limited to the properties that three provides 
- Three-Drei and Three-Cannon have a well-maintained repository & clean documentation, but sometimes lack community input that could help you fix more specific problems 



