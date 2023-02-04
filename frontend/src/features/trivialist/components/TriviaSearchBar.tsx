import { Col, Dropdown, Input, Row } from "@nextui-org/react";
import React, { Key, useEffect } from "react";
import { useCategory } from "../api/getCategory";
import { TriviaCategory } from "../types";

type SelectionType = "all" | Set<Key>;

interface TriviaSearchBarProps {
  onSearchChange: Function;
  onFilterChange: Function;
}

export const TriviaSearchBar: React.FC<TriviaSearchBarProps> = ({
  onSearchChange,
  onFilterChange,
}) => {
  const { data: catgories } = useCategory();
  const [selected, setSelected] = React.useState<SelectionType>(
    new Set([])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  useEffect(() => {
    console.log(selectedValue)
    onFilterChange(selectedValue);
  }, [selectedValue]);

  return (
    <Row justify="center" css={{ marginTop: 50 }} gap={2}>
      <Col css={{ width: "auto" }}>
        <Dropdown>
          <Dropdown.Button flat>{selected}</Dropdown.Button>
          <Dropdown.Menu
            aria-label="Dynamic Actions"
            items={catgories}
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            {(item) => {
              let dropdownItems = item as TriviaCategory;
              return (
                <Dropdown.Item
                  key={dropdownItems.id}
                  textValue={dropdownItems.category_name}
                >
                  {dropdownItems.category_name}
                </Dropdown.Item>
              );
            }}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col css={{ width: "auto" }}>
        <Input
          labelPlaceholder="Search"
          clearable
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Col>
    </Row>
  );
};
