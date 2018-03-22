let initialState = {
  settingIcon:  0,
  contactIcon:  0,
  searchIcon:   0, 
  specialIcon:  0,
  aFrameIcon:   0,
  updateText: null,
}

export default function footerReducer (state = initialState, action) {
  switch (action.type) {
    case 'settingIcon':
      return {
        ...state,
        settingIcon: action.text
      }
    break;
    case 'contactIcon':
    return {
      ...state,
      contactIcon: action.text
    }
    break;
    case 'searchIcon':
    return {
      ...state,
      searchIcon: action.text
    }
    break;
    case 'specialIcon':
    return {
      ...state,
      specialIcon: action.text
    }
    break;
    case 'aFrameIcon':
    return {
      ...state,
      aFrameIcon: action.text
    }
    break;
    case 'updateText':
    return {
      ...state,
      updateText: action.text
    }
    break;
    default:
      return state
  }
}