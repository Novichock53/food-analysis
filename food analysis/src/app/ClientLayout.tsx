'use client';

import StyledComponentsRegistry from './registry'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  );
}
