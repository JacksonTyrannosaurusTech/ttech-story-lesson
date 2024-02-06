function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rCY8brPgoD":
        Script1();
        break;
      case "5fZZlgN7p1l":
        Script2();
        break;
      case "5VHx4k9mLGe":
        Script3();
        break;
      case "6mq5SIubglD":
        Script4();
        break;
      case "5WXN86z4C9j":
        Script5();
        break;
      case "5uyUZXMrUyQ":
        Script6();
        break;
      case "6PUDoHSsmAX":
        Script7();
        break;
      case "65sqSJLzAY8":
        Script8();
        break;
      case "6X1o9d4E4uy":
        Script9();
        break;
      case "5cwk2Bn0FO6":
        Script10();
        break;
      case "6IN9vxenh6j":
        Script11();
        break;
      case "6IEJ2hFBkoy":
        Script12();
        break;
      case "5c1MMYSXeCb":
        Script13();
        break;
      case "6FNFC5uhwE6":
        Script14();
        break;
      case "6Ki6r3GO86m":
        Script15();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6g7WJlsF9He');
const duration = 750;
const easing = 'ease-out';
const id = '6MlkeHsCRmR';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5arMoqR5xSz');
const duration = 750;
const easing = 'ease-out';
const id = '5dXzbvmYdI4';
const shakeAmount = 5;
const delay = 2000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('6rbb7ATvYGg');
const duration = 750;
const easing = 'ease-out';
const id = '6MlkeHsCRmR';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5qTjOQfbtFK');
const duration = 750;
const easing = 'ease-out';
const id = '5dXzbvmYdI4';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('64muCd3Lq71');
const duration = 750;
const easing = 'ease-out';
const id = '6KBDluTrgwk';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6Q9Y2kRXsmU');
const duration = 750;
const easing = 'ease-out';
const id = '5uZehsAKts1';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6PV6qsxd1ew');
const duration = 750;
const easing = 'ease-out';
const id = '6p0s4I6GfGQ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5qXN33hjZfx');
const duration = 750;
const easing = 'ease-out';
const id = '6p0s4I6GfGQ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6LXftUtIzRv');
const duration = 750;
const easing = 'ease-out';
const id = '5ubKHq9QAMZ';
const pulseAmount = 0.07;
const delay = 3500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5Y1zJQMIYgr');
const duration = 750;
const easing = 'ease-out';
const id = '5sioxXCDS6T';
const shakeAmount = 2;
const delay = 1500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5u6fLm9ITGs');
const duration = 750;
const easing = 'ease-out';
const id = '67H9aNuUVrs';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6gb0Aj5uGTs');
const duration = 750;
const easing = 'ease-out';
const id = '65LTi4qyYgN';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('5ZC1qwWkp8B');
const duration = 750;
const easing = 'ease-out';
const id = '5e1t8UGMQiE';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('5yYho0LDVWv');
const duration = 750;
const easing = 'ease-out';
const id = '6p0s4I6GfGQ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6ik7hEvSred');
const duration = 750;
const easing = 'ease-out';
const id = '6p0s4I6GfGQ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
