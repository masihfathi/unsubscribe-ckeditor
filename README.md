# Add-on Installation Instructions
Enable the plugin by using the extraPlugins configuration setting usually config.js of ckeditor
```
config.extraPlugins = 'unsubscribe';
```

#  Add item with custom toolbar

```
config.toolbar = [
	...
	{ name: 'insert', items: ['unsubscribe'] }
]
```
