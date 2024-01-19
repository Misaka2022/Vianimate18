 //密码校验
export function pwdValidator(_, value, callback) {
    if (/^(?![\d]+$)(?![a-zA-Z]+$)(?![_]+$)[\da-zA-Z_]{6,20}$/.test(value)) {
      callback();
    } else {
      callback(new Error("数字、字母、下划线任意两种组合，且不能少于6位大于20位"));
    }
  }