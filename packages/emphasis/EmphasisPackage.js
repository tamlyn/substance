import { platform } from '../../util'
import { AnnotationCommand, AnnotationTool } from '../../ui'
import Emphasis from './Emphasis'
import EmphasisHTMLConverter from './EmphasisHTMLConverter'
import EmphasisComponent from './EmphasisComponent'

export default {
  name: 'emphasis',
  configure: function(config, {toolGroup, disableCollapsedCursor}) {
    config.addNode(Emphasis)
    config.addConverter('html', EmphasisHTMLConverter)
    config.addConverter('xml', EmphasisHTMLConverter)
    config.addComponent('emphasis', EmphasisComponent)
    config.addCommand('emphasis', AnnotationCommand, {
      nodeType: Emphasis.type,
      disableCollapsedCursor
    })
    config.addTool('emphasis', AnnotationTool, {
      toolGroup: toolGroup || 'annotations'
    })
    config.addIcon('emphasis', { 'fontawesome': 'fa-italic' });
    config.addLabel('emphasis', {
      en: 'Emphasis',
      de: 'Betonung'
    })
    if (platform.isMac) {
      config.addKeyboardShortcut('cmd+i', { command: 'emphasis' })
    } else {
      config.addKeyboardShortcut('ctrl+i', { command: 'emphasis' })
    }
  },
  Emphasis,
  EmphasisComponent,
  EmphasisHTMLConverter
}
