module.export = {
  entry:{
    index:'./lib/index.tsx'
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:'awesome-typescript-loader'

      }
    ]
  },
  output:{

  }
}
