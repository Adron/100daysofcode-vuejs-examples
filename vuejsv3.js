const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }

const CounterApp = {
    data() {
      return {
        counter2: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter2++
      }, 1000)
    }
  }

const CollectionSinglePageAppFunctionality = {
    data() {
        return {
            message: "Hello world at it's fundamental!",
            helloMessage: 'The standard wonderful, lovely, beautiful, and gracious hello world!',
            pageLoadMessage: 'You loaded this page on ' + new Date().toLocaleString()
        }
    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('')
      }
    }
}

Vue.createApp(Counter).mount('#counter')
Vue.createApp(CounterApp).mount('#counter2')

Vue.createApp(CollectionSinglePageAppFunctionality).mount('#coreApp')