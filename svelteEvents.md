```json
Parent: {
  Child: {
    SubChild: {

    }
  }
}
```

DOWN: `Parent` sets variables of `Child`
```js
Parent:
  <Child name={"test"} />

Child:
  export let name: string = "default";
```

UP: `SubChild` emits an event up to `Parent`
```js
Parent:
  <Child on:event.testEvent={()=>{console.log("event")}} />

Child:
  <SubChild on:event.testEvent />

SubChild:
  const dispatch = createEventDispatcher();
  dispatch("event.testEvent");
```

UP: `Parent` gets `Child` reference to run child function
```js
Parent:
	let childComponent;
  <Child bind:this={childComponent} />

Child:
  <SubChild on:event.testEvent />
```
