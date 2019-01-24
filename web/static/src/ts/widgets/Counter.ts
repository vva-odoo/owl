import { Widget } from "../core/widget";
import { Env } from "../env";

const template = `
    <div>
        <button t-on-click="increment(-1)">-</button>
        <span style="font-weight:bold">Value: <t t-esc="state.counter"/></span>
        <button t-on-click="increment(1)">+</button>
    </div>
`;

export class Counter extends Widget<Env> {
  name = "counter";
  template = template;
  state = {
    counter: 0
  };

  constructor(parent: Widget<Env>, props: { initialState?: number }) {
    super(parent);
    this.state.counter = props.initialState || 0;
  }

  mounted() {
    debugger;
  }
  increment(delta: number) {
    this.updateState({ counter: this.state.counter + delta });
  }
}
