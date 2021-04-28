# Generator Feature

## I Implement a CLI generator for scafold Project in easy way and with this feature we have one single patterns for scale project

### Generate An Component

```shell

 yarn generator component

```

 > this command generate this files

```html

<!-- Main Loader For Component -->
 <b>./components/<COMPONENT_NAME>/index.tsx</b>

<!--  Test File with Snapshot -->
 ./components/<COMPONENT_NAME>/tests/index.test.ts

<!-- Type decalration for typeScript -->
 ./components/<COMPONENT_NAME>/<COMPONENT_NAME>/.d.ts

<!-- StoryBook File -->
 ./components/<COMPONENT_NAME>/<COMPONENT_NAME>/.d.ts
 ```

### also you could Generate Container

```shell

 yarn generate container

```

> this command also generate this files

```html

<!-- Main Loader For Component  -->
  ./containers/<CONTAINER_NAME>/index.tsx

<!-- Layouts Folder (For Layout of This Page)  -->
  ./containers/<CONTAINER_NAME>/layouts/..

<!-- Store Folders (includes store, redux reduser, saga-generator, constans, selector)
 You can define store connected container or not
 and if you select connected container then this files added -->
  ./containers/<CONTAINER_NAME>/store/action.ts
  ./containers/<CONTAINER_NAME>/store/constants.ts
  ./containers/<CONTAINER_NAME>/store/reducer.ts
  ./containers/<CONTAINER_NAME>/store/saga.ts
  ./containers/<CONTAINER_NAME>/store/selectors.ts

<!-- Styles
 This style file imported in main loader file and is scoped styles 
 just available for this container -->
./containers/<CONTAINER_NAME>/styles/<CONTAINER_NAME>.module.scss

<!-- Test File with Snapshot  -->
 ./containers/<CONTAINER_NAME>/tests/index.test.ts

<!-- Type decalration for typeScript -->
 ./containers/<CONTAINER_NAME>/<COMPONENT_NAME>/.d.ts

 ```

## Genereator file placed in `./server/internals/`
