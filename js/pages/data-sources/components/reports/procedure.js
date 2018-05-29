define([
	'knockout',
	'text!./treemap.html',
  'pages/data-sources/classes/Treemap',
  'pages/data-sources/const',
  'components/heading',
  'components/charts/treemap',
  'pages/data-sources/components/reports/treemapDrilldown',
], function (
	ko,
	view,
  TreemapReport,
  helpers
) {
	class Procedure extends TreemapReport {
    constructor() {
      super();
      this.name = 'procedure';
      this.view = view;
      this.currentReport = {};

      this.aggProperty = helpers.aggProperties.byPerson;
      this.byFrequency = true;
      this.byType = true;
    }

    createViewModel(params) {
      super.createViewModel(params);
      return this;
    }
  }

  const report = new Procedure();	
	return report.build();
});
