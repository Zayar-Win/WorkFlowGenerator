"use client";
import { ParamProp } from "@/components/appNode";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useId } from "react";

const StringParam = ({ param, value, updateNodeParamsValue }: ParamProp) => {
  const [internalValue, setInternalValue] = React.useState<string>(value);
  const id = useId();
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex items-center">
        {param.name}
        {param.required && <p className="text-red-500">*</p>}
      </Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => setInternalValue(e.target.value)}
        onBlur={() => updateNodeParamsValue(internalValue)}
      />
      {param.helperText && (
        <p className="text-xs text-muted-foreground">{param.helperText}</p>
      )}
    </div>
  );
};

export default StringParam;
