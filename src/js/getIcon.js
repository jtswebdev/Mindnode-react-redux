
import atomIcon      from '../images/atomIcon.png'
import imageIcon     from '../images/imageIcon.png'
import knowledgeIcon from '../images/knowledgeIcon.png'
import nodeIcon      from '../images/nodeIcon.png'
import noteIcon      from '../images/noteIcon.png'
import projectIcon   from '../images/projectIcon.png'
import scheduleIcon  from '../images/scheduleIcon.png'
import toParentIcon  from '../images/toParentIcon.png'
import menuIcon      from '../images/menuIcon.png'
import closeIcon     from '../images/closeIcon.png'
import checkIcon     from '../images/checkIcon.png'
import deleteIcon    from '../images/deleteIcon.png'
import downArrowIcon from '../images/downArrowIcon.png'
import linkIcon      from '../images/linkIcon.png'
import newIcon       from '../images/newIcon.png'
import summaryIcon   from '../images/summaryIcon.png'
import textIcon      from '../images/textIcon.png'
import editIcon      from '../images/editIcon.png'


export const getIcon = ( icon ) => {

  switch ( icon ) {

      case 'atom':
          return atomIcon;
      case 'image':
          return imageIcon;
      case 'knowledge':
          return knowledgeIcon;
      case 'node':
          return nodeIcon;
      case 'notes':
          return noteIcon;
      case 'projects':
          return projectIcon;
      case 'schedule':
          return scheduleIcon;
      case 'toParent':
          return toParentIcon;
      case 'menu':
          return menuIcon;
      case 'close':
          return closeIcon;
      case 'check':
          return checkIcon;
      case 'delete':
          return deleteIcon;
      case 'downArrow':
          return downArrowIcon;
      case 'link':
          return linkIcon;
      case 'new':
          return newIcon;
      case 'summary':
          return summaryIcon;
      case 'text':
          return textIcon;
      case 'edit':
          return editIcon;
      default:
          return atomIcon;

  }

};

export const icons     = [ atomIcon, knowledgeIcon, nodeIcon, noteIcon, projectIcon, scheduleIcon, toParentIcon ];
export const iconNames = [ 'atom',   'knowledge',   'node',   'notes',  'projects',  'schedule',   'toParent' ];
