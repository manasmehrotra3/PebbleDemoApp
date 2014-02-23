/* global simply */

simply.text({
    title: 'Hello World!',
    subtitle: 'Version 1',
}, true);

simply.on('singleClick', function() {
   simply.body("Okay! Good Job!"); 
});
