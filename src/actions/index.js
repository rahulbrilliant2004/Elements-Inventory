const SETTING_ICON = 'settingIcon'
const CONTACT_ICON = 'contactIcon'
const SEARCH_ICON = 'searchIcon'
const SPECIAL_ICON = 'specialIcon'
const AFRAME_ICON = 'aFrameIcon'
const UPDATE_TEXT = 'updateText'


export function settingIcon(data) {
    return {
      type: SETTING_ICON,
      text: data,
    }
}

export function contactIcon(data) {
    return {
      type: CONTACT_ICON,
      text: data,
    }
}

export function searchIcon(data) {
    return {
      type: SEARCH_ICON,
      text: data,
    }
}

export function specialIcon(data) {
    return {
      type: SPECIAL_ICON,
      text: data,
    }
}

export function aFrameIcon(data) {
    return {
      type: AFRAME_ICON,
      text: data,
    }
}

export function updateText(data){
  return {
    type: UPDATE_TEXT,
    text: data,
  }
}