import { StyledNavigationWrapper as Wrapper } from './Navigation.styles';
import { AuthenticationControl } from './components/AuthenticationControl/AuthenticationControl.component';
import { Logo } from 'lib/ui-kit/components/Logo/Logo.component';

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <AuthenticationControl />
    </Wrapper>
  );
};
