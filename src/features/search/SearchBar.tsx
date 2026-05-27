"use client";
import type { ChangeEvent, RefObject } from "react";
import { Wrapper, Icon, Input, Hint, HintIcon } from "./SearchBar.styles";

export default function SearchBar({
  value,
  onChange,
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  return (
    <Wrapper>
      <Icon>search</Icon>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder="Search curated repos..."
      />
      <Hint>
        <HintIcon>keyboard_command_key</HintIcon>K
      </Hint>
    </Wrapper>
  );
}
