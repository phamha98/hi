## Debounce
```ts
const getData = useDebounce(async () => {
    if (tmid) {
        try {
            await fetch.api();
        } catch {
            // Do nothing
        }
    }
}, 1000);
export function debounce(func: Function, wait?: number, immediate?: boolean) {
let timeout: ReturnType<typeof setTimeout> | null;
function _debounce(...args: any[]) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const later = function __debounce() {
        timeout = null;
        if (!immediate) {
            func.apply(context, args);
        }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    // @ts-ignore
    timeout = setTimeout(later, wait);
    if (callNow) {
        func.apply(context, args);
    }
}
_debounce.stop = () => clearTimeout(timeout!);
return _debounce;
}

const handleSearch = useCallback(
    debounce(async (text: string) => {
        console.debug('function')
        if (false) {
            const result = await searchChanel({ text, ridMention});
        }
        const result = await searchMethod({ text, filterRooms: false });
        setSearch(result);
    }, 1000),
    []
);
```
## Function chaining
```js
const get = (a = 1) => {
  let sum = a;
  const inner = (b) => {
    sum += b;
    console.log('=>>>', sum);
    return inner;
  };
  return inner;
};
get(2)(4)(7)(8)(9)(3)
```