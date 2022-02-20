import { Form, Formik } from "formik";

import { useUser } from "lib/api";
import { UserSettingsFieldset } from "lib/form-kit";
import { Button } from "lib/ui-kit";
import { mapUserDataToUserSettingsFormData } from "./UserSettings.service";

export const UserSettingsForm = () => {
  const { userData } = useUser();

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
