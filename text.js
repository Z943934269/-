// js深拷贝
function deepClone1 (obj) {
  var objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
// js观察者模式

function Pubsub () {
  this.handles = {};
}

Pubsub.prototype = {
  on: function (type, handle) {
    if (!this.handles[type]) {
      this.handles[type] = [];
    }
    this.handles[type].push(handle);
  },

  emit: function () {
    var type = Array.prototype.shift.call(arguments);
    if (!this.handles[type]) {
      return false;
    }

    for (var i = 0; i < this.handles[type].length; i++) {
      var handle = this.handles[type][i];
      handle.apply(this, arguments);
    }
  },
  off: function (type, handle) {
    handles = this.handles[type];
    if (handles) {
      if (!handle) {
        handles.length = 0;
      } else {
        for (var i = 0; i < handles.length; i++) {
          var _handle = handles[i];
          if (_handle === handle) {
            handles.splice(i, 1);
          }
        }
      }
    }
  }
}
// es6数组去重
// Map & filter
function unique (arr) {
  const res = new Map();
  return arr.filter((a) => !res.has(a) && res.set(a, 1))
}
// Set
var newArr = [...new Set(arr)]
// 插入排序
function sort (arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var guard = arr[i];
      var j = i - 1;
      arr[i] = arr[j];
      while (j >= 0 && guard < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = guard;
    }
  }
}