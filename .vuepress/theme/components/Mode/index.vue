<template>
	<div class="color-switch" v-if="$modeSwitch !== false" >
		<a class="color-button" @click.prevent="selectMode">
      <reco-icon :icon="'icon-'+currentMode"></reco-icon>
		</a>
	</div>
</template>

<script>
import { RecoIcon } from '../../core/components'
import applyMode from './applyMode'

export default {
  name: 'ModeSettings',
  components: {
    RecoIcon
  },
  data () {
    return {
      modeOptions: ['dark', 'auto', 'light'],
      currentMode: 'auto'
    }
  },
  methods: {
    selectMode () {
      let index = this.modeOptions.indexOf(this.currentMode)
      index = index === this.modeOptions.length - 1 ? 0 : index + 1
      this.currentMode = this.modeOptions[index]
      applyMode(this.currentMode)
      localStorage.setItem('mode', this.currentMode)
    }
  },
  mounted () {
    if (this.$modeSwitch === false) {
      // 为 'auto' 模式设置监听器
      if (this.$mode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          applyMode(this.$mode)
        })
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          applyMode(this.$mode)
        })
      }
      applyMode(this.$mode)
    } else {
      // modeSwitch 开启时默认使用用户主动设置的模式
      this.currentMode = localStorage.getItem('mode') || this.$mode
      // Dark and Light auto switches
      // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
      window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        this.currentMode === 'auto' && applyMode(this.currentMode)
      })
      window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
        this.currentMode === 'auto' && applyMode(this.currentMode)
      })
      applyMode(this.currentMode)
    }
  }
}
</script>

<style lang="stylus">
.color-switch {
	position: relative;
	margin-right: 1em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}
}
</style>
