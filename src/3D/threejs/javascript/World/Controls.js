import EventEmitter from '../Utils/EventEmitter';
import Experience from '../Experience';

export default class Controls extends EventEmitter {
  experience = new Experience();
  camera = this.experience.camera;
  time = this.experience.time;
  sizes = this.experience.sizes;

  constructor() {
    super();
    this.setActions();
    this.setKeyboardControls()
  }
  setActions() {
    this.actions = {
      up: false,
      right: false,
      down: false,
      left: false,
      brake: false,
    };
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.actions.up = false;
        this.actions.right = false;
        this.actions.down = false;
        this.actions.left = false;
        this.actions.brake = false;
      }
    });
  }
  setKeyboardControls() {
    this.keyboard = {
      events: {
        keyDown: (_event) => {
          switch (_event.key) {
            case 'ArrowUp':
            case 'w':
              this.camera.pan.reset()
              this.actions.up = true;
              break;

            case 'ArrowRight':
            case 'd':
              this.actions.right = true;
              break;

            case 'ArrowDown':
            case 's':
              this.camera.pan.reset()
              this.actions.down = true;
              break;

            case 'ArrowLeft':
            case 'a':
              this.actions.left = true;
              break;

            case ' ':
              this.actions.brake = true;
              break;
            default:
              break
          }
        },

        keyUp: (_event) => {
          switch (_event.key) {
            case 'ArrowUp':
            case 'w':
              this.camera.pan.reset()
              this.actions.up = false;
              break;

            case 'ArrowRight':
            case 'd':
              this.actions.right = false;
              break;

            case 'ArrowDown':
            case 's':
              this.camera.pan.reset()
              this.actions.down = false;
              break;

            case 'ArrowLeft':
            case 'a':
              this.actions.left = false;
              break;

            case ' ':
              this.actions.brake = false;
              break;
            default:
              break
          }
        },
      },
    };
    document.addEventListener('keydown', this.keyboard.events.keyDown)
    document.addEventListener('keyup', this.keyboard.events.keyUp)
  }
}
