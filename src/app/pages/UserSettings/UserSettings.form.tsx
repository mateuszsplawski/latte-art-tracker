import { Form, Formik } from "formik";

import { useAuthentication } from "lib/authentication";
import { UserSettingsFieldset } from "lib/form-kit";
import { Button } from "lib/ui-kit";
import { mapUserDataToUserSettingsFormData } from "./UserSettings.service";

export const UserSettingsForm = () => {
  const { userData } = useAuthentication();

  return (
    <Formik
      enableReinitialize
      initialValues={mapUserDataToUserSettingsFormData(userData)}
      onSubmit={(values) => console.log(values)}
    >
      <Form noValidate>
        <UserSettingsFieldset />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
