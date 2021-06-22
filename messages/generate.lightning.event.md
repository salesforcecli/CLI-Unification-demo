# summary
  
Generate a Lightning event bundle.

# description

The bundle consists of multiple files in a folder with the designated name.

If not supplied, the apiversion, template, and outputdir use default values.

The outputdir can be an absolute path or relative to the current working directory.

If you don’t specify an outputdir, we create a subfolder in your current working directory with the name of your bundle. For example, if the current working directory is force-app and your Lightning bundle is called myBundle, we create force-app/myBundle/ to store the files in the bundle.

# examples

- Generate a Lightening event called MyEvent:

  sf generate lightning event --event-name MyEvent
