# electrode-treeshaking-test
repo to test electrode packages (component repos) tree shaking


# why is it needed?

components repo can be reused by different apps, and it is important to include only components used by application and nothing else 

# test method 

- using lerna mono repo
- created electrode application and components repo with `electrode ignite` tool (using ignite `2.1.9`)
- add `UnusedComponent` to `test-components` package, in the same file that includes component imported by the app 
- build components package: `cd packages/test-components && npm run prepublish` 
- build app: `cd packages/app && npm run build` 
- test if `UnusedComponent` is included in the final bundle (using [ag - silver searcher](https://github.com/ggreer/the_silver_searcher)) 
`ag UnusedComponent dist/* -c`   

# current status 

unused components are included in final bundle if app import something from the same module

webpack tree shaking is not enabled, because package is transpiled to ES5 without keeping ES6 modules in place
