import { unref, computed, h } from 'vue'
import TableHeader from '../components/TableHeader/index.vue'
import type { ComputedRef, Slots } from 'vue'
import type { BasicTableProps, InnerHandlers, Recordable } from '../../types'
import { isString } from '../utils/is'
import { getSlot } from '../utils/getSlot'

export function useTableHeader(
  propsRef: ComputedRef<BasicTableProps>,
  slots: Slots,
  handlers: InnerHandlers
) {
  const getHeaderProps = computed((): Recordable => {
    const { title, showTableSetting, titleHelpMessage, tableSetting } =
      unref(propsRef)
    const hideTitle =
      !slots.tableTitle && !title && !slots.toolbar && !showTableSetting
    if (hideTitle && !isString(title)) {
      return {}
    }

    return {
      title: hideTitle
        ? null
        : () =>
            h(
              TableHeader,
              {
                title,
                titleHelpMessage,
                showTableSetting,
                tableSetting,
                onColumnsChange: handlers.onColumnsChange,
              } as Recordable,
              {
                ...(slots.toolbar
                  ? {
                      toolbar: () => getSlot(slots, 'toolbar'),
                    }
                  : {}),
                ...(slots.tableTitle
                  ? {
                      tableTitle: () => getSlot(slots, 'tableTitle'),
                    }
                  : {}),
                ...(slots.headerTop
                  ? {
                      headerTop: () => getSlot(slots, 'headerTop'),
                    }
                  : {}),
              }
            ),
    }
  })
  return { getHeaderProps }
}
