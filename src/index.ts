import * as less from 'less'
import * as jdistsUtil from 'jdists-util'
import * as jsyaml from 'js-yaml'

/**
 * less 编译
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.data 数据项，支持 JSON 和 YAML
 * @param scope 作用域
 * @param scope.getFilename 获取当前文件
 * @return 返回编译后的结果
 * @example processor():base
  ```js
  let attrs = {}
  let scope = {
    getFilename: function () {
      return 'src/index.ts'
    }
  }
  processor(`
  @base: #f938ab;
  div {
    color: @base;
  }
  `, attrs, scope).then(function (css) {
    console.log(JSON.stringify(css))
    // > "div {\n  color: #f938ab;\n}\n"
    // * done
  }).catch(function (err) {
    console.error(err)
  })
  ```
 * @example processor():content is null
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor(null, attrs, scope))
  // > null
  ```
 */
export = (function (content: string, attrs: jdistsUtil.IAttrs, scope: jdistsUtil.IScope): string | Promise<string> {
  if (!content) {
    return content
  }
  return less.render(content, {
    filename: scope.getFilename(),
  }).then((output) => {
    return output.css
  }) as Promise<string>
}) as jdistsUtil.IProcessor
