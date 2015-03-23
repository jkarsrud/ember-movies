import Ember from 'ember';
import layout from '../templates/components/format-money';
import accounting from 'accounting';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  formatted: function() {
    return accounting.formatMoney(this.get('amount'), Ember.$.extend(accounting.settings.currency, {
      symbol: this.get('symbol'),
      thousand: this.get('thousand'),
      decimal: this.get('decimal'),
      precision: this.get('precision')
    }));
  }.property('amount', 'symbol', 'decimal', 'thousand', 'precision')
});
