const activeWindow = require("active-win");
const robot = require("robotjs");
const {GlobalKeyboardListener} = require("node-global-key-listener");

const globalKeyboardListener = new GlobalKeyboardListener();
// CTRL + SHIFT centers the mouse to the active window
globalKeyboardListener.addListener(async function (e, down) {
    if (e.state == "DOWN" && e.name == "LEFT SHIFT" && down["LEFT CTRL"]) {
        //call your function
        await centerToActiveWindow()
    }
});

async function centerToActiveWindow() {
    const {bounds} = await activeWindow({screenRecordingPermission: false});
    const {x, y, width, height} = bounds;
    robot.moveMouseSmooth(x + width/2, y + height/2, 0);
};