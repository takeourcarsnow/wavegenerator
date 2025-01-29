const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Settings with default values
let settings = {
    gridSize: 3,
    lineStrength: 0.1,
    lineWidth: 3,
    lineColor: '#f0f0f0',
    mouseRadius: 100,
    elasticity: 0.2,
    friction: 0.05,
    colorMode: 'rainbow',
    interactionMode: 'push',
    backgroundColor: '#1a1a1a',
    backgroundImage: null,
    lineStyle: 'solid',
    waveCount: 5,
    waveShape: 'sine',
    interactionStrength: 0.5,
    waveSpeed: 1,
    waveAmplitude: 200,
    waveSpacing: 50,
    turbulence: 0,
    turbulenceType: 'sine',
    turbulenceSpeed: 1,
    turbulenceScale: 50,
    turbulenceComplexity: 1,
    blendMode: 'source-over',
    plexEffect: true,
    plexIntensity: 50,
    glowEffect: false,
    glowIntensity: 30
};

let mouse = { x: -1000, y: -1000, smoothX: -1000, smoothY: -1000, vx: 0, vy: 0 };

// Get control elements
const gridSizeInput = document.getElementById('gridSize');
const lineStrengthInput = document.getElementById('lineStrength');
const lineWidthInput = document.getElementById('lineWidth');
const lineColorInput = document.getElementById('lineColor');
const mouseRadiusInput = document.getElementById('mouseRadius');
const elasticityInput = document.getElementById('elasticity');
const frictionInput = document.getElementById('friction');
const backgroundColorInput = document.getElementById('backgroundColor');
const backgroundImageInput = document.getElementById('backgroundImage');
const uploadButton = document.getElementById('uploadButton');
const lineStyleInputs = document.querySelectorAll('input[name="lineStyle"]');
const clearButton = document.getElementById('clearButton');
const waveCountInput = document.getElementById('waveCount');
const interactionStrengthInput = document.getElementById('interactionStrength');
const controlsContainer = document.getElementById('controls-container');
const controls = document.getElementById('controls');
const controlsToggle = document.getElementById('controls-toggle');
const waveSpeedInput = document.getElementById('waveSpeed');
const waveAmplitudeInput = document.getElementById('waveAmplitude');
const waveSpacingInput = document.getElementById('waveSpacing');

// Radio buttons
const colorModeInputs = document.querySelectorAll('input[name="colorMode"]');
const interactionModeInputs = document.querySelectorAll('input[name="interactionMode"]');
const waveShapeInputs = document.querySelectorAll('input[name="waveShape"]');
const displayModeInputs = document.querySelectorAll('input[name="displayMode"]'); 