import {Fragment, useEffect, useRef} from "react";
import Sortable from "sortablejs";
import {Badge} from "@/other/Texts";

const defaultRender = (item) => <Badge isGrabbable={true} color="lime" name={item.title}/>;
const defaultKey = (item) => item.id;

/**
 * A drag-and-drop reorderable list powered by SortableJS, with custom item rendering.
 * Controlled: the parent owns the order and receives the new array through `onChange`.
 * Sortable's DOM move is reverted after each drag, so React renders the new order from `value`.
 * `renderItem` must return exactly one DOM element per item, or the drag indexes will not match `value`.
 *
 * @template T
 * @param {Object} props
 * @param {T[]} props.value Items in their current order.
 * @param {(items: T[]) => void} props.onChange Called after a drag with the reordered array (a new reference, never mutated).
 * @param {(item: T, index: number) => import("react").ReactElement} [props.renderItem] Renders one item. Defaults to a lime `Badge` showing `item.title`.
 * @param {(item: T, index: number) => string | number} [props.getKey] Returns a unique React key for an item. Defaults to `item.id`. Use the index in the key if items can be duplicated.
 * @param {string} [props.className="flex gap-1 flex-wrap"] Classes of the list container. Replaces the default.
 * @returns {import("react").JSX.Element}
 */
export function DraggableContent({value, onChange, renderItem = defaultRender, getKey = defaultKey, className = "flex gap-1 flex-wrap"}) {
  const listRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const valueRef = useRef(value);
  onChangeRef.current = onChange;
  valueRef.current = value;

  useEffect(() => {
    const sortable = Sortable.create(listRef.current, {
      animation: 150,
      onEnd: ({from, item, oldIndex, newIndex}) => {
        if (oldIndex === newIndex) return;
        // Undo Sortable's DOM move so React stays the only owner of the DOM
        from.removeChild(item);
        from.insertBefore(item, from.children[oldIndex] ?? null);
        const next = [...valueRef.current];
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]);
        onChangeRef.current(next);
      },
    });
    return () => sortable.destroy();
  }, []);

  return (
    <div ref={listRef} className={className}>
      {value.map((item, index) => (
        <Fragment key={getKey(item, index)}>{renderItem(item, index)}</Fragment>
      ))}
    </div>
  );
}