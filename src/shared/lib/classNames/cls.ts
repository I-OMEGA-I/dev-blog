export function cls(...values: Array<String | Record<string, boolean | string>>): string {  
  return values.reduce((acc, current) => {
    if (typeof current === "object") {

      Object.entries(current)
        .filter(([classname, value]) => Boolean(value))
        .forEach(([classname, value]) => acc.push(classname))

      return acc;
    }
    acc.push(current)
    return acc;
  }, []).join(' ');
}

console.log(cls("test1", {foo: true, bar: true}, "test2",  {foobar: false}))