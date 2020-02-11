const kick1 = new Tone.Player("./sounds/kicks/1.wav").toDestination();
const kick2 = new Tone.Player("./sounds/kicks/2.wav").toDestination();
const kick3 = new Tone.Player("./sounds/kicks/3.wav").toDestination();
const kick4 = new Tone.Player("./sounds/kicks/4.wav").toDestination();

const clap1 = new Tone.Player("./sounds/claps/1.wav").toDestination();
const clap2 = new Tone.Player("./sounds/claps/2.wav").toDestination();
const clap3 = new Tone.Player("./sounds/claps/3.wav").toDestination();
const clap4 = new Tone.Player("./sounds/claps/4.wav").toDestination();

const snare1 = new Tone.Player("./sounds/snares/1.wav").toDestination();
const snare2 = new Tone.Player("./sounds/snares/2.wav").toDestination();
const snare3 = new Tone.Player("./sounds/snares/3.wav").toDestination();
const snare4 = new Tone.Player("./sounds/snares/4.wav").toDestination();

const hiHat1 = new Tone.Player("./sounds/hi_hats/1.wav").toDestination();
const hiHat2 = new Tone.Player("./sounds/hi_hats/2.wav").toDestination();
const hiHat3 = new Tone.Player("./sounds/hi_hats/3.wav").toDestination();
const hiHat4 = new Tone.Player("./sounds/hi_hats/4.wav").toDestination();

const loop1 = new Tone.Player("./sounds/samples/1.wav").toDestination();
const loop2 = new Tone.Player("./sounds/samples/2.wav").toDestination();

// 1 => Digit1     |  A / Q => KeyQ    |  Q / A => KeyA   |  W / Z  => KeyZ
// 2 => Digit2     |  Z / W => KeyW    |  S     => KeyS   |  X      => KeyX
// 3 => Digit3     |  E     => KeyE    |  D     => KeyD   |  C      => KeyC
// 4 => Digit4     |  R     => KeyR    |  F     => KeyF   |  V      => KeyV

// 1 => Digit1     |  A / Q => KeyQ    |  Q / A => KeyA   |  W / Z  => KeyZ
// 2 => Digit2     |  Z / W => KeyW    |  S     => KeyS   |  X      => KeyX
// 3 => Digit3     |  E     => KeyE    |  D     => KeyD   |  C      => KeyC
// 4 => Digit4     |  R     => KeyR    |  F     => KeyF   |  V      => KeyV

window.onkeydown = function(e) {
  switch (e.code) {
    case "Digit1":
      kick1.start();
      break;
    case "Digit2":
      snare1.start();
      break;
    case "Digit3":
      clap1.start();
      break;
    case "Digit4":
      hiHat1.start();
      break;
    case "KeyQ":
      kick2.start();
      break;
    case "KeyW":
      snare2.start();
      break;
    case "KeyE":
      clap2.start();
      break;
    case "KeyR":
      hiHat2.start();
      break;
    case "KeyA":
      kick3.start();
      break;
    case "KeyS":
      snare3.start();
      break;
    case "KeyD":
      clap3.start();
      break;
    case "KeyF":
      hiHat3.start();
      break;
    case "KeyZ":
      loop1.start();
      break;
    case "KeyX":
      loop2.start();
      break;
  }
};

// window.onkeyup = function(e) {
//   switch (e.code) {
//     case "Digit1":
//       //
//       //
//       break;
//     case "Digit2":
//       snare1.start();

//       break;
//     case "Digit3":
//       clap1.start();
//       break;
//     case "Digit4":
//       hiHat1.start();
//       break;
//     case "KeyQ":
//       kick2.start();
//       break;
//     case "KeyW":
//       snare2.start();
//       break;
//     case "KeyE":
//       clap2.start();
//       break;
//     case "KeyR":
//       hiHat2.start();
//       break;
//     case "KeyA":
//       kick3.start();
//       break;
//     case "KeyS":
//       snare3.start();
//       break;
//     case "KeyD":
//       clap3.start();
//       break;
//     case "KeyF":
//       // hiHat3.start();
//       break;
//     case "KeyZ":
//       // loop1.start();
//       break;
//     case "KeyX":
//       // loop2.start();
//       break;
//   }
// };
