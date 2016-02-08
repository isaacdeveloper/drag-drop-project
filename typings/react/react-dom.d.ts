declare module __ReactDOM { 
  function render<P>(
      element: __React.DOMElement<P>,
      container: Element,
      callback?: () => any): __React.DOMComponent<P>;
  function render<P, S>(
      element: __React.ClassicElement<P>,
      container: Element,
      callback?: () => any): __React.ClassicComponent<P, S>;
  function render<P, S>(
      element: __React.ReactElement<P>,
      container: Element,
      callback?: () => any): __React.Component<P, S>;

  function findDOMNode<TElement extends Element>(
      componentOrElement: __React.Component<any, any> | Element): TElement;
  function findDOMNode(
      componentOrElement: __React.Component<any, any> | Element): Element;

}

declare module "react-dom" {
  export = __ReactDOM
}
