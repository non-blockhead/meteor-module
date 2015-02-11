/**
 * Provides a centralized controller that registers channels and executes
 * functions that subscribe to it.
 */

Mediator = function () {
  this.channels = {};
}

/**
 * Allows code to register a function on a specific channel. The function is
 * executed when the channel is published.
 * @method subscribe
 * @param (String) channel The channel name to subscribe to.
 * @param (Object) fn The function to execute when the channel is published.
 * @return this
 */
Mediator.prototype.subscribe = function (channel, fn) {
  if (!this.channels[channel]) this.channels[channel] = [];
  mediator.channels[channel].push({ context: this, callback: fn });
  return this;
}

/**
 * Execute the functions that are subscribed to a channel.
 * @method publish
 * @param (String) channel The channel name to publish.
 * @return this
 */
Mediator.prototype.publish = function (channel) {
  if (!this.channels[channel]) return false;
  var args = Array.prototype.slice.call(arguments, 1);
  for (var i = 0, l = this.channels[channel].length; i < l; i++) {
    var subscription = mediator.channels[channel][i];
    subscription.callback.apply(subscription.context, args);
  }
  return this;
}

/**
 * Adds a mediator to an object.
 * @param (Object) obj
 * @return
 */
Mediator.prototype.installTo = function (obj) {
  obj.subscribe = this.subscribe;
  obj.publish = this.publish;
}
