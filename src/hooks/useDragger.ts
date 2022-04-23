let res = {};
let Events: Fn;
function dragenter(e) {
  e.dataTransfer.dropEffect = 'move';
}
function dragover(e) {
  e.preventDefault();
}
function dragleave(e) {
  e.dataTransfer.dropEffect = 'none';
}
function drop(e) {
  const { offsetX: x, offsetY: y } = e;

  Events.emit('update', {
    x,
    y,
    ...res,
  });
}
export function start(containerRef, obj, emitter) {
  res = obj;
  Events = emitter;
  containerRef.value.addEventListener('dragenter', dragenter);
  containerRef.value.addEventListener('dragover', dragover);
  containerRef.value.addEventListener('dragleave', dragleave);
  containerRef.value.addEventListener('drop', drop);
}
export function end(e, component) {}
