import { useMeasure } from "@reactuses/core";
import {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
} from "react";

export interface IShowMoreProps {
  onToggleShow: () => void;
  showingAll: boolean;
  count: number;
}

export interface InlineOverflowListProps<T> {
  /**
   * Array of items to render
   *
   * This can be string of array or objects
   */
  items: T[];

  /** Function that renders each item */
  itemRenderer: (item: T, index: number) => ReactNode;

  /**
   * Renderer for the "Show more" button
   *
   * Provides toggle handler, current state, and remaining count
   */
  showMoreRenderer: (props: IShowMoreProps) => ReactNode;

  /** Gap (px) between items, defaults to 8 */
  gap?: number;

  /** Extra buffer width before wrapping items, defaults to 0 */
  buffer?: number;

  /** Optional children rendered at the end */
  children?: ReactNode;

  /** Optional maximum number of items to display before overflow */
  maxItems?: number;
}

export function InlineOverflowList<T>({
  items,
  itemRenderer,
  showMoreRenderer,
  gap = 8,
  buffer = 0,
  children,
  maxItems,
}: InlineOverflowListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [{ width }] = useMeasure(containerRef);
  const [visibleCount, setVisibleCount] = useState(
    maxItems ? maxItems : items.length
  );
  const [showAll, setShowAll] = useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    let total = 0;
    let fitCount = 0;
    let buttonWidth = 94;
    for (let i = 0; i < items.length; i++) {
      const el = itemRefs.current[i];
      if (el) {
        total += el.offsetWidth + gap;
        if (total > width - (buffer + buttonWidth)) break;
        if(maxItems && fitCount >= maxItems) break;
        fitCount++;
      }
    }
    setVisibleCount(fitCount);
  }, [width, items, gap]);

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-wrap items-center relative gap-2 w-full"
        style={{ gap }}
        data-testid="inline-overflow-list-container"
      >
        {/* Hidden measurement pass */}
        <div className="absolute invisible pointer-events-none h-0">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`inline-block`}
              style={{ marginRight: gap }}
            >
              {itemRenderer(item, index)}
            </div>
          ))}
        </div>

        {/* Actual visible items */}
        {(showAll
          ? items
          : items.slice(0, visibleCount)
        ).map((item, index) => itemRenderer(item, index))}
        {visibleCount < items.length &&
          showMoreRenderer({
            onToggleShow: () => setShowAll((prev) => !prev),
            showingAll: showAll,
            count: items.length - visibleCount,
          })}
        {children}
      </div>
    </>
  );
}
