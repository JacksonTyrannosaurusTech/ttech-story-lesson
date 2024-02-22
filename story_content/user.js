function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60iuBF9TwMW":
        Script1();
        break;
      case "6QHyLx8syxt":
        Script2();
        break;
      case "62oC5XVamXI":
        Script3();
        break;
      case "6CtuJwbM0ZC":
        Script4();
        break;
      case "5xhARXgDKCg":
        Script5();
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
  player.once(() => {
const target = object('6LXftUtIzRv');
const duration = 750;
const easing = 'ease-out';
const id = '5ubKHq9QAMZ';
const pulseAmount = 0.07;
const delay = 13250;
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

window.Script2 = function()
{
  player.once(() => {
const target = object('5Y1zJQMIYgr');
const duration = 750;
const easing = 'ease-out';
const id = '5sioxXCDS6T';
const shakeAmount = 2;
const delay = 1750;
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
  player.once(() => {
const target = object('5u6fLm9ITGs');
const duration = 750;
const easing = 'ease-out';
const id = '67H9aNuUVrs';
const pulseAmount = 0.07;
const delay = 7000;
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

window.Script4 = function()
{
  player.once(() => {
const target = object('6gb0Aj5uGTs');
const duration = 750;
const easing = 'ease-out';
const id = '65LTi4qyYgN';
const pulseAmount = 0.07;
const delay = 7000;
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

window.Script5 = function()
{
  player.once(() => {
const target = object('5ZC1qwWkp8B');
const duration = 750;
const easing = 'ease-out';
const id = '5e1t8UGMQiE';
const pulseAmount = 0.07;
const delay = 7000;
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
