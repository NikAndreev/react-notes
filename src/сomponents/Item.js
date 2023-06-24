const Item = ({item, remove, toggle, move}) => {
  const onRemove = () => {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      remove(item)
    } 
  }

  const onToggle = () => {
    toggle({
      ...item,
      isCompleted: !item.isCompleted
    })
  }

  const onMove = (direction) => {
    move(item, direction)
  }

  return (
    <li className="to-do__item">
      <label className="checkbox to-do__item-checkbox">
        <input 
          type="checkbox" 
          className="checkbox__native"   
          checked={item.isCompleted}
          onChange={onToggle}
        />
        <button 
          type="button" 
          className="checkbox__custom"
        >
        </button>
        <span className="checkbox__text">
          {item.title}
        </span>
      </label>
      <span className="to-do__item-arrows">
        <button 
          className="to-do__item-arrow"
          onClick={() => onMove('up')}
        >
          🠕
        </button>
        <button 
          className="to-do__item-arrow"
          onClick={() => onMove('down')}
        >
          🠗
        </button>
      </span>
      <button 
        type="button" 
        className="to-do__item-delete"
        onClick={onRemove}
      >
        Удалить
      </button>
    </li>
  )
}

export default Item
