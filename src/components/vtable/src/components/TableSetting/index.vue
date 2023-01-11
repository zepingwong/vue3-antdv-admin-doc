<template>
  <div class="table-setting">
    <redo-setting v-if="getSetting.redo" />
    <size-setting v-if="getSetting.size" />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import type { TableSetting } from '../../../types'
import RedoSetting from './RedoSetting.vue'
import SizeSetting from './SizeSetting.vue'

const props = defineProps({
  setting: {
    type: Object as PropType<TableSetting>,
    default: () => ({}),
  },
})

const getSetting = computed((): TableSetting => {
  return {
    redo: true,
    size: true,
    setting: true,
    fullScreen: false,
    ...props.setting,
  }
})
</script>

<style scoped>
.table-setting {
  display: flex;
  & > * {
    margin-right: 12px;
  }

  svg {
    width: 1.3em;
    height: 1.3em;
  }
}
</style>
