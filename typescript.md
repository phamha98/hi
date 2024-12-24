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
```ts
*.js
get FlatList(): AnimatedFlatList {
    return require('./components/AnimatedFlatList').default;
  },
vscode setting =>"javascript.validate.enable": false, //validate ESLINT & Flow

npm install -g javascript-obfuscator

javascript-obfuscator src/ --output dist/

{
  "scripts": {
    "obfuscate": "javascript-obfuscator src/ --output dist/"
  }
}
```

## Appium
```js
while (true) {
	await driver.execute('mobile: swipe', {
	    direction: 'up',
	    startX: 800,
	    startY: 1000,
	    endX: 800,
	    endY: 350,
	    duration: 50
	});
	await new Promise(res => setTimeout(res, 500));
}

```
## K in keyof
```ts
 type AuthProviderMockProps = {
  [K in keyof CreateAuthProviderMockProps]-?: NonNullable<CreateAuthProviderMockProps[K]>
};
 ```